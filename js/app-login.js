// Сверстать макет из 2 страниц. Сконнектить ссылками 2 страницы. На каждое поле поставить
// валидацию (пароль не должен быть менее 8 символов, регулярные выражения для почты /
// номера, при регистрации pwd, confirm pwd идентичны). После нажатия на кнопку срабатывает
// валидация. Если валидация прошла успешно, то вывести alert “Вы успешно зарегистрированы /
// авторизованы в системе”, в зависимости от страницы. Если проверки не прошли, то вывсти alert с
// соответствующим сообщением об ошибке

const btn = document.querySelector('button');
const mail = document.querySelector('.mail');
const pwd = document.querySelector('.pwd')

btn.addEventListener('click', () => {
    try {
        if (!mail.value || !pwd.value) throw new Error('no information available')
        if (!/^[\w]+\@[a-z]+\.[a-z]{1,5}$/gm.test(mail.value) && !/^\+[\d]{12,}$/gm.test(mail.value)) throw new Error('email \\ mobile phone is not entered correctly')
        if (!/^[\w\ \"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\^\_\~]{8,}/gm.test(pwd.value)) throw new Error('password is not entered correctly')
        alert('You have successfully registered')
        mail.value = '';
        pwd.value = '';
    } catch (error) {
        alert(error.message)
    }
})