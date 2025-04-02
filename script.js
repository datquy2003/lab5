// coding implementation
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let comment = document.getElementById("com").value.trim();
    let rating = document.getElementById("rate").value.trim();

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let ratingRegex = /^\d+$/;

    let errorMessage = "";

    if (email === "") {
        errorMessage += "Email không được bỏ trống.\n";
    } else if (!emailRegex.test(email)) {
        errorMessage += "Email không đúng định dạng.\n";
    }

    if (comment === "") {
        errorMessage += "Comment không được bỏ trống.\n";
    }

    if (rating === "") {
        errorMessage += "Rating không được bỏ trống.\n";
    } else if (!ratingRegex.test(rating)) {
        errorMessage += "Rating phải là số.\n";
    }

    if (errorMessage !== "") {
        alert(errorMessage);
    } else {
        alert("Validate Thành Công.");
        document.querySelector("form").submit();
    }
});

// end coding implementation
