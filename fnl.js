console.log('Listening For Requests...');

if (ObjC.available) {

    try {

        var className = "NSURLSession";
        var funcName = "- dataTaskWithRequest:completionHandler:";

        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');

        Interceptor.attach(hook.implementation, {


            onEnter: function(args) {
               
            },

        });

    } catch (error) {
        console.log("[!] Exception: " + error.message);
    }
} else {

    console.log("Objective-C Runtime is not available!");

}