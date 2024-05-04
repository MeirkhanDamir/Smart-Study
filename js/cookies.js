 type="text/javascript" 
 src="https://code.jquery.com/jquery-3.6.3.js" 
 type="text/javascript"
	const container = document.querySelector(".warning");
    if (document.cookie.indexOf("warning") != -1) {
		container.classList.remove("warning--active");
	}

	if (document.querySelector(".warning")) {
	  const apply = container.querySelector(".warning__apply");
	  apply.addEventListener("click", () => {
	    container.classList.remove("warning--active");
	    document.cookie = "warning=true; max-age=2592000; path=/";
	  });
	};
