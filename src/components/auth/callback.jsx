import * as React from "react";

import { AuthConsumer } from "../../providers/authProvider";

export const Callback = () => (
    <AuthConsumer>
        {({ signinRedirect, signinRedirectCallback }) => {
            if (Boolean(window.location.hash)) {
                signinRedirectCallback();
            } else {
                signinRedirect();
            }
        }}
    </AuthConsumer>
);
