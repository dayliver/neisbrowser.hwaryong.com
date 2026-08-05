/**
 * public/latest.json 생성 — 나이스브라우저 자동 업데이트 매니페스트.
 *
 * 앱은 이 파일을 보고 새 버전이 있는지 판단한다. 서명(.sig)이 맞지 않으면
 * 앱이 설치를 거부하므로, 빌드한 산출물에서 직접 읽어 만든다.
 *
 *   node scripts/make-latest.js <버전> [빌드 폴더]
 *   node scripts/make-latest.js 1.0.0-alpha.5
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const version = process.argv[2];
const bundleDir =
  process.argv[3] || 'D:/Projects/neis-tauri-poc/src-tauri/target/release/bundle/nsis';

if (!version) {
  console.error('사용법: node scripts/make-latest.js <버전> [빌드 폴더]');
  process.exit(1);
}

// Tauri v2의 NSIS 업데이터는 설치 파일(setup.exe) 자체를 내려받아 조용히 실행한다
const setupName = `NeisBrowser_${version}_x64-setup.exe`;
const sigPath = join(bundleDir, `${setupName}.sig`);

let signature;
try {
  signature = readFileSync(sigPath, 'utf8').trim();
} catch {
  console.error(`서명 파일을 찾지 못했습니다: ${sigPath}`);
  console.error('TAURI_SIGNING_PRIVATE_KEY를 설정하고 빌드했는지 확인하세요.');
  process.exit(1);
}

const manifest = {
  version,
  notes: `나이스브라우저 ${version} — 자세한 내용은 릴리스 노트를 확인하세요.`,
  pub_date: new Date().toISOString(),
  platforms: {
    'windows-x86_64': {
      signature,
      url: `https://github.com/dayliver/neisbrowser-release/releases/download/v${version}/${setupName}`
    }
  }
};

const out = 'public/latest.json';
writeFileSync(out, JSON.stringify(manifest, null, 2) + '\n');
console.log(`${out} 작성 완료 — ${version}`);
console.log(`  url: ${manifest.platforms['windows-x86_64'].url}`);
console.log(`  sig: ${signature.slice(0, 24)}...`);
