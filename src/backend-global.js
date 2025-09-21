exports.httpHandler = {
    endpoints: [
        {
            scope: 'global',
            method: 'GET',
            path: 'demo',
            handle: function handle(ctx) {
                const storage = ctx.globalStorage.extensionProperties.testManagementEnabled;
                ctx.response.json({
                    test: true,
                    scope: 'global',
                    method: 'GET',
                    storage
                });
            }
        },

        {
            scope: 'global',
            method: 'POST',
            path: 'demo',
            handle: function handle(ctx) {
                const body = ctx.request.json();
                ctx.globalStorage.extensionProperties.testManagementEnabled = body.enabled;
                ctx.response.json({
                    success: true,
                    scope: 'global',
                    method: 'POST',
                    isEnabled: body.enabled,
                    receiveBody: body
                });
            }
        }
    ]
};
