
const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {

        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center")
    .addEventListener("mousemove", throttleFunction((detail) => {
        var div = document.createElement("div");
        div.classList.add("imgdiv");
        div.style.left = detail.clientX + "px";
        div.style.top = detail.clientY + "px";
        div.style.transform = "rotate(-5deg)";

        var img = document.createElement("img");
        img.setAttribute("src", "https://i.pinimg.com/222x/a1/71/0c/a1710ced29d52624ae10103c00b588ae.jpg")
        div.appendChild(img)

        document.body.appendChild(div);

        gsap.to(img, {
            y: "0",
            ease: Power2,
            duration: .5,
        });

        gsap.to(img, {
            y: "100%",
            delay: .6,
            ease: Power2,
        });

        setTimeout(function () {
            div.remove();
        }, 2000)
    }, 300));