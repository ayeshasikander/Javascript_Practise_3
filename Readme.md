# JavaScript Image Movement with GSAP

This project demonstrates how to create a visually appealing image movement effect using JavaScript and GSAP (GreenSock Animation Platform). It adds an interactive feature to your webpage where images follow the mouse cursor with a slight animation. The project also utilizes throttling to optimize performance.

## Getting Started

1. Clone or download this repository to your local machine.

2. Open the `index.html` file in your web browser to experience the image movement effect.

## How It Works

The project consists of an HTML file, a CSS file (`style.css`), and a JavaScript file (`javascript.js`). Here's a brief overview of how it works:

- **HTML (`index.html`):** Contains the structure of the webpage, including the main content and references to CSS and JavaScript files.

- **CSS (`style.css`):** Defines the styling for text elements and sets up the container for image movement.

- **JavaScript (`javascript.js`):** Handles the image movement and animation using GSAP. The code is explained below:

   - The `throttleFunction` is used to limit the frequency of the mousemove event, improving performance by preventing excessive function calls.

   - When the mouse moves over the `#center` element, a new `div` element with the class `imgdiv` is created at the mouse cursor's position. An image is appended to this `div`.

   - GSAP animations are applied to the image. It moves from its initial position (transformed below the view) to a visible position, creating a smooth entrance effect. After a delay, it moves out of view and is then removed from the DOM.

## Customization

You can customize this project in several ways:

- **Add More Images:** You can add additional images to your project by creating new `img` elements in the HTML and adjusting the JavaScript code to handle them.

- **Modify Styling:** To change the appearance of text or the container, you can edit the CSS styles in the `style.css` file.

- **Adjust Animation:** Experiment with different animation parameters in the JavaScript code to change the behavior of image movement and animation.

## Contributing

If you want to contribute to this project or have suggestions for improvements, feel free to fork the repository and submit a pull request.

## Dependencies

- [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/): The project utilizes GSAP for animations. Make sure to include it in your project as shown in the HTML file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project was created for educational purposes and was inspired by various JavaScript animation tutorials and examples available online.

---

Enjoy experimenting with this interactive image movement effect! If you have any questions or need further assistance, please don't hesitate to reach out.