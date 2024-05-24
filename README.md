# React Pratice


# parcel(zero config tool)
-dev build
-local Server
- Refressing your page(HMR= Hot Module Replacement)- uses a file watching algorithm (which is written in C++)
- faster build (because of caching)
-Image optimization(most expensive thing in your web browser is load images)
-Minification of files(bundling)
-Compressing
-Consistent Hashing
-Code Splitting
-Differential Bundling (to support older browsers ,when you script type="module", it  generates nomodule fallback for older browser){different bundle for different types of browser}
-Diagnostics (good error handling ) {beautiful errors- to incresse your dev experience}
-HTTPs (parcel index.html --https)
-Tree shaking(suppose we have 100 of function and we are using 4-5 functions , it will remove everything that is not used)
-lazy loading
-Different Build for dev and prod bundles
