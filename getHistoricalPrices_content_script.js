(function getHistoricalPrices() {
    if (!(/google/i.test(window.location.hostname))) {
        console.log(window.location.hostname);
        return;
    }
    if (!(window.location.pathname.startsWith('/finance'))) {
        console.log(window.location.pathname);
        return;
    }

    let param = new URLSearchParams(window.location.search.substring(1));
    let stockSymbol = param.get('q');
    if (stockSymbol) {
        console.log('Extracted stock symbol: ' + stockSymbol);
        window.location.href = window.location.origin + '/finance/historical?q=' + encodeURIComponent(stockSymbol);
    }
})();
