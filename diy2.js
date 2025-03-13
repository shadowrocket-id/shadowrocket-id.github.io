document.addEventListener('DOMContentLoaded', () => {
    // 直接调用 showFirstPopup 函数，传递一个默认的 buttonId
    showFirstPopup('defaultButtonId');
});

// 第一个弹窗
function showFirstPopup(buttonId) {
    Swal.fire({
        title: '新手登录教程第一步',
        html: `<p>共享账号在哪里登录是安全的？</p><br><br>
            <div class="button-container">
                <img src="https://cdn.jsdelivr.net/gh/usaxhj/usaxhj.github.io/AppleAuto/01a.png" id="correctButton1" alt="正确链接图片">
                <img src="https://cdn.jsdelivr.net/gh/usaxhj/usaxhj.github.io/AppleAuto/01b.png" id="wrongButton1" alt="错误链接图片">
            </div>
        `,
        showCancelButton: false,
        showConfirmButton: false
    });

    document.getElementById('correctButton1').addEventListener('click', () => {
        Swal.close(); // 关闭第一个弹窗
        showSecondPopup(buttonId); // 传递按钮 ID 打开第二个弹窗
    });

    document.getElementById('wrongButton1').addEventListener('click', () => {
        Swal.fire('危险警告！', '共享账号不要在设置中登录！<br>可能会造成锁机变砖头！', 'error');
    });
}


        // 第二个弹窗
        function showSecondPopup(buttonId) {
            Swal.fire({
                title: '新手登录教程第二步',
                html: `<p>登录账号时弹出AppleID安全提示<br>点什么？</p>
                    <img src="https://cdn.jsdelivr.net/gh/usaxhj/usaxhj.github.io/AppleAuto/02.png" width="99%"> <br>  
                    <p id="wrongButton2">继 续</p>
                    <p id="correctButton2">其他选项</p>`,
                showCancelButton: false,
                showConfirmButton: false
            });

            document.getElementById('correctButton2').addEventListener('click', () => {
                Swal.close();
                showThirdPopup(buttonId); // 传递按钮 ID 打开第三个弹窗
            });

            document.getElementById('wrongButton2').addEventListener('click', () => {
                Swal.fire('回答错误', '点继续会泄露个人手机号！', 'error');
            });
        }

   function showThirdPopup(buttonId) {
    Swal.fire({
        title: '新手登录教程第三步',
        html: `
            <p>点击其他选项后，然后点什么？</p>
            <div style="position: relative;">
                <img src="https://cdn.jsdelivr.net/gh/usaxhj/usaxhj.github.io/AppleAuto/03.jpg" width="99%">
            </div>
        `,
        showCancelButton: true, // 显示取消按钮
        confirmButtonText: '升级账户安全', // 确认按钮文字
        cancelButtonText: '不升级', // 取消按钮文字
        focusConfirm: false, // 不自动聚焦到确认按钮
    }).then((result) => {
        if (result.isConfirmed) {
            // 用户点击了“升级账户安全”
            Swal.fire('回答错误', '升级账户安全会泄露个人手机号！', 'error');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // 用户点击了“不升级”
            Swal.fire('回答正确', '你已经完成新手登录教程！', 'success');
        }
    });
}