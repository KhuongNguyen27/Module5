import React from 'react';

function ProfileCard(props) {
    return ( 
        <div>
            <div className="container">
                <div className="card">
                    <div className="card--header" />
                    <img
                        className="avatar"
                        src="https://lh3.googleusercontent.com/pw/AIL4fc_VkdqKQhi5_5iLlpLTgFm1LzezsUExpR2lgRkiDSZWrg9qNnG6_KZAb7F2l20ln2Qu_feXZMZdRXZmsShDHFCzTugmm4zvl5ov9lVX9HftlwWFhZE_em7AP0OjWMl--yD1YcXYc5yiJSP-8_dz7hlkP0JTHMDUBXQFp1zimnfihO0gYdNJPHfd9CLORb5Yu5C3que9xeLrXawPuNVMhJ9EBNjZJjvyO6VkpdJQNTU5pXDkQS0ZEfcMWihxx0s617I68LoxwSpivNREdbxlmzoF46fUd0GuypP2Uo4wKVPRH0eccNDf9SLnR3AytzcVtbRxyRfaE2eQPiuTFWJ1r2g_AspeGB_o1K6yJ28SQTmNt3WAwcpMp34G-VRIsreh4EAfM7N7TTbUyV4zo66jqeVbnBQTgm30tAi9ObsMv7Z7T1sMy-btf4kViB1OR65HN2tjy1ofZBTPXiL9QS2LEj15vSiIVfOd6eCwkuhmhmiDTRSmPxjBTkCxdrS78JxCTtueDG6Ye9-pqlnHL8Dc9XaRLQ9mUrCXR4Xn548eyBHU6GrL7iRf8e--HXa0ISYtGV8b4Df70aXQ00z02aIXWDoowt6GRwGXoQ7u9_EVjcfte0Tev_aGHdmDWbkDWkusBjdUiRDb5o5mFaXZFn-5_fsswKf20wO9vgIB05F54106xOmQzNqPoR8pfRPykENQg49Hao7vbLUxTMb5y_aVf7YDGe1l35KX65nepVs8uDApD3NXbhguGL_7YsI5oxOjMoG2BrrMFYUkdQVLg8WAVEtYJnRyK98p0sen0cUPnwevEgGLqRYk6QOTV9zk9U-r3Jsc1bBOD3yUZb7QYedwcjKcecGYiNueedo1gGAMv7_CTjpxc7ZGYpFUY4yCBkFWzDFt1jOfuxCTgZ4EWM9I7BA97efcZCpJvJ2xeKUzcQzj7H4U-JB6d-lxPNDx-iuWqVOo1JnhqWXEEfCX8FgLcHA022uSk8qml8Hbfsk07a1dpiDQ215zPBXe1LPIF6c23Q=w484-h651-s-no?authuser=0"
                        alt="avatar"
                    />
                    <div className="card--body">
                        <div>
                            <p className="text-header">Khuong Nguyen</p>
                            <p className="text-sub">
                                C0323H1
                            </p>
                            <button className="btn third">FOLLOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;