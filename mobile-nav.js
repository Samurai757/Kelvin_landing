// Находим кнопку для открытия моб. навигации
const mobileNavBtnOpen = document.querySelector("#openMobileNav");

// Находим кнопку для закрытия моб. навигации
const mobileNavBtnClose = document.querySelector("#closeMobileNav");

// Находим  блок с моб. навигацией
const mobileNav = document.querySelector(".mobile-nav");

// Вешаем прослушку по клику на кнопку моб. навигации
mobileNavBtnOpen.addEventListener("click", function () {
	// console.log("Click");
	// по клику добавляем класс mobile-nav--open к блоку с моб. навигацией
	mobileNav.classList.add("mobile-nav--open");
	// Добавляем body класс no-scroll, чтобы при вкл. моб. навигации небыло скрола по вертикали
	document.body.classList.add("no-scroll");
});

// Вешаем прослушку по клику на кнопку закрытия моб. навигации
mobileNavBtnClose.addEventListener("click", function () {
	// по клику удаляем класс mobile-nav--open с блока с моб. навигацией
	mobileNav.classList.remove("mobile-nav--open");
	// Удаляем у body класс no-scroll
	document.body.classList.remove("no-scroll");
});

// Закрываем мобю навигацию при клике по ссылкам внутри мобю навигации
/** находим все ссылки моб. навигации  */
const mobileNavLinks = mobileNav.querySelectorAll("a, button");
console.log("mobileNavLinks");

// Перебираем все ссылки моб. навигации
mobileNavLinks.forEach(function (link) {
	console.log(link);
	// Вешаем прослушку по клику на каждую ссылку мобю навигации
	link.addEventListener("click", function () {
		// console.log("Click on element");

		// по клику удаляем класс mobile-nav--open с блока с моб. навигацией
		mobileNav.classList.remove("mobile-nav--open");
		// Удаляем у body класс no-scroll
		document.body.classList.remove("no-scroll");
	});
});
