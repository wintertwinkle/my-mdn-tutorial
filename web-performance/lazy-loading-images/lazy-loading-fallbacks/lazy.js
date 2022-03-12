document.addEventListener('DOMContentLoaded', () => {
    let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))
    // processing state used to throttle function calls
    let active = false 

    const lazyLoad = function() {
        if (active === false) {
            active = true

            setTimeout(() => {
                // loading lazy images
                lazyImages.forEach(lazyImage => {
                    // only loading when image in in viewport
                    if ( (lazyImage.getBoundingClientRect().top <= window.innerHeight
                     && lazyImage.getBoundingClientRect().bottom >= 0) 
                    && getComputedStyle(lazyImage).display !== 'none') {
                        console.log('img loading')
                        lazyImage.src = lazyImage.dataset.src
                        lazyImage.srcset = lazyImage.dataset.srcset
                        lazyImage.classList.remove('lazy')

                        lazyImages = lazyImages.filter(image => {
                            return image !== lazyImage
                        })
        
                        if (lazyImages.length === 0) {
                            // three actions cause lazy loading
                            document.removeEventListener('scroll', lazyLoad)
                            window.removeEventListener('resize', lazyLoad)
                            window.removeEventListener('orientationchange', lazyLoad)
                        }
                    }
                });
                
                active = false
            }, 200)
        }
    }

    document.addEventListener('scroll', lazyLoad)
    window.addEventListener('resize', lazyLoad)
    window.addEventListener('orientationchange', lazyLoad)
})