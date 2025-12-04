import { execSync } from 'node:child_process';
import process from 'node:process';

// 1. 명령어 인수로 전달된 메시지 받기
// npm run push -- "0.0.2 - 메시지" 형태로 실행 시 process.argv[2]에 메시지가 들어옴
const args = process.argv.slice(2);
const commitMessage = args[0];

if (!commitMessage) {
  console.error('❌ 에러: 커밋 메시지를 입력해주세요.');
  console.error('사용법: npm run push -- "0.0.2 - 설명"');
  process.exit(1);
}

// 2. 메시지 앞부분에서 버전 번호(예: 0.0.2) 추출
// 정규표현식: 숫자로 시작하고 점(.)으로 연결된 형태
const versionMatch = commitMessage.match(/^(\d+\.\d+\.\d+)/);

if (!versionMatch) {
  console.error('❌ 에러: 메시지는 버전 번호(x.y.z)로 시작해야 합니다.');
  process.exit(1);
}

const newVersion = versionMatch[1];

try {
  console.log(`📦 package.json 버전을 ${newVersion}으로 변경합니다...`);
  
  // npm version 명령어로 package.json의 version 필드만 수정 (git 태그/커밋 생성 방지)
  execSync(`npm version ${newVersion} --no-git-tag-version`, { stdio: 'inherit' });

  console.log('🚀 Git add, commit, push 진행 중...');
  
  // Git 명령어 순차 실행
  execSync('git add .', { stdio: 'inherit' });
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
  execSync('git push -u origin main', { stdio: 'inherit' });

  console.log(`✅ 배포 완료! (버전: ${newVersion})`);

} catch (error) {
  console.error('❌ 실행 중 오류가 발생했습니다.');
  process.exit(1);
}