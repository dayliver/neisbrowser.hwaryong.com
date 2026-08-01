import { onMounted, onUnmounted } from 'vue';

/**
 * .reveal 이 붙은 요소가 화면에 들어오면 .in 을 붙여 등장 애니메이션을 실행한다.
 * 접근성: 사용자가 모션 축소를 선택했다면 애니메이션 없이 바로 보여준다.
 */
export function useReveal(root = null) {
  let observer = null;

  onMounted(() => {
    const targets = (root?.value ?? document).querySelectorAll('.reveal');
    if (!targets.length) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      targets.forEach((el) => {
        el.style.opacity = '1';
      });
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
  });

  onUnmounted(() => observer?.disconnect());
}
