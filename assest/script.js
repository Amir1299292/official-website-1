 const parent = document.getElementById('container');
    const overlay = document.getElementById('highlight-box');
    const children = parent.querySelectorAll('.content-item');
    let lastActiveChild = null; // برای ذخیره آخرین موقعیت

   // تابع جابجایی
    function moveOverlayTo(el) {
      const parentRect = parent.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      const dx = rect.left - parentRect.left;
      const dy = rect.top - parentRect.top;

      overlay.style.width = rect.width + 'px';
      overlay.style.height = rect.height + 'px';
      overlay.style.transform = `translate(${dx}px, ${dy}px)`;
      lastActiveChild = el;
    }

    // وقتی موس روی خود .child وارد شد (نه عناصر داخلی)
    children.forEach((child) => {
      child.addEventListener('mouseenter', (e) => {
        // فقط اگر خود child هدف اصلی event بود (نه فرزند داخلی)
        if (e.currentTarget !== e.target) return;
        moveOverlayTo(child);
      });
    });

    // در خروج از parent هیچ‌کاری نکن
    parent.addEventListener('mouseleave', () => {});

    // شروع: overlay روی فرزند اول
    window.addEventListener('load', () => moveOverlayTo(children[0]));
    


    
  function showDiv(id, element) {
    const allDivs = document.querySelectorAll(".content");
    const allTabs = document.querySelectorAll(".tab");

    // پنهان کردن همه دیوها
    allDivs.forEach(div => {
      div.classList.add("opacity-0", "translate-y-4", "hidden");
    });

    // حذف استایل فعال از همه pها
    allTabs.forEach(tab => tab.classList.remove("tab-active"));

    // فعال کردن استایل مخصوص روی p کلیک‌شده
    element.classList.add("tab-active");

    // نمایش نرم دیو مربوطه
    const targetDiv = document.getElementById(id);
    targetDiv.classList.remove("hidden");

    requestAnimationFrame(() => {
      targetDiv.classList.remove("opacity-0", "translate-y-4");
    });
  }

