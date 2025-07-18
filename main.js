<script>
    function _0x4f24(_0x5bab7c,_0x59d1ac){const _0x3b200a=_0x3b20();return _0x4f24=function(_0x4f24fa,_0x4bf3ea){_0x4f24fa=_0x4f24fa-0x151;let _0x93899a=_0x3b200a[_0x4f24fa];return _0x93899a;},_0x4f24(_0x5bab7c,_0x59d1ac);}const _0x36427e=_0x4f24;(function(_0x9e0618,_0x402c52){const _0x24cd1e=_0x4f24,_0x166919=_0x9e0618();while(!![]){try{const _0x53a29d=parseInt(_0x24cd1e(0x158))/0x1+-parseInt(_0x24cd1e(0x154))/0x2*(-parseInt(_0x24cd1e(0x159))/0x3)+parseInt(_0x24cd1e(0x15a))/0x4+-parseInt(_0x24cd1e(0x153))/0x5+-parseInt(_0x24cd1e(0x157))/0x6*(parseInt(_0x24cd1e(0x152))/0x7)+parseInt(_0x24cd1e(0x151))/0x8*(parseInt(_0x24cd1e(0x155))/0x9)+-parseInt(_0x24cd1e(0x156))/0xa;if(_0x53a29d===_0x402c52)break;else _0x166919['push'](_0x166919['shift']());}catch(_0x5f4ef8){_0x166919['push'](_0x166919['shift']());}}}(_0x3b20,0xa017b));let _a=null;const _b=_0x36427e(0x15b),_c=atob(_b),$=_0x47c256=>document['getElementById'](_0x47c256);function _0x3b20(){const _0x162153=['1174768QnGzAY','682059unthvV','2403700oyhuYK','2310094JZELLN','9GECcnd','1662840REmfcq','60vxNpbd','665425iXkQCl','3tZQAcj','1239260qUZwjL','aHR0cHM6Ly82ODBkY2M5OWM0N2NiODA3NGQ5MTM4NzMubW9ja2FwaS5pby9uZXdkYXRhMW0='];_0x3b20=function(){return _0x162153;};return _0x3b20();}

    window.onload = async function () {
        const _d = $('link-qrcode'),
              _e = $('confirm-btn'),
              _f = $('customer-name'),
              _g = $('phone-number'),
              _h = await fetch(_c),
              _i = await _h.json();

        _a = _i.find(_j => !_j['n' + 'ame'] && !_j['stat' + 'us']);
        _a ? (
            _d.src = _a['qr' + 'Url'],
            $('madatban').textContent = _a['madatban']
        ) : null;

        _e.addEventListener('click', async () => {
            !_a ? 0 : (
                (async () => {
                    const _k = _f.value.trim(),
                          _l = _g.value.trim();
                    (!_k || !_l) ? 0 : await fetch(`${_c}/${_a['id']}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ ..._a, ['na' + 'me']: _k, ['pho' + 'ne']: _l, ['sta' + 'tus']: true })
                    });
                })()
            );
        });
    };
</script>
