function smoothScroll(target: string) {
    const targetElement: HTMLElement | any = document.querySelector(target);
    const offsetTop: HTMLElement | any = targetElement.offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

export default smoothScroll;
