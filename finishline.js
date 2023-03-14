Interceptor.attach(ObjC.classes.TTHttpTask["- skipSSLCertificateError"].implementation, {
    onEnter: function (args) {
        
    },
    onLeave: function (retval) {
        console.log('Overriding -> TTHttpTask skipSSLCertificateError : ');
        retval.replace(0x1)
    }
});
    
    
console.log('SSL Bypassed... Traffic should now be decrypted');