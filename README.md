# Flappy Bird

Flappy Bird is a classic game where players control a bird to fly through a series of obstacles, aiming to achieve the highest score possible. This project replicates the iconic gameplay using HTML, CSS, and JavaScript.

![Flappy Bird](https://firebasestorage.googleapis.com/v0/b/ecommerce-react-47db0.appspot.com/o/image%2FScreen%20Shot%202024-02-23%20at%206.52.45%20PM.png?alt=media&token=e0f29fc1-cbde-4b0b-8548-2d7870e8e569)

## Gameplay 🕹️
- **Controls**: Press any key or click the mouse to flap the bird's wings and navigate it through the obstacles.
- **Obstacles**: The game features green pipes positioned at different heights on the screen. The player must guide the bird through the gaps between the pipes to avoid collisions.
- **Scoring**: Each successful passage through a pair of pipes earns the player one point. The game ends if the bird collides with a pipe or if it falls to the ground.

## Tech Stack 💻
### Frontend:
- **HTML**: Provides the structure of the game, including elements like the canvas for rendering graphics and the scoreboard.
- **CSS**: Styles the game elements, defining their appearance and layout on the screen.
- **JavaScript**: Implements the game logic, including bird movement, pipe generation, collision detection, and score tracking.

## Game Logic 🧠
The game's JavaScript code is structured as follows:
1. **Initialization**: Set up the game canvas, load assets (such as bird image and pipe sprites), and initialize variables for bird position, velocity, and score.
2. **Main Loop**: Continuously update the game state and render the graphics.
3. **User Input**: Listen for user input (keypress or mouse click) to control the bird's movement.
4. **Bird Movement**: Update the bird's position based on gravity and user input, simulating flight physics.
5. **Pipe Generation**: Generate pipes at random intervals and positions on the screen.
6. **Collision Detection**: Check for collisions between the bird and pipes, ending the game if a collision occurs.
7. **Score Tracking**: Increment the score when the bird successfully passes through a pair of pipes.
8. **Game Over**: Display the game over screen and allow the player to restart the game.

## Demo 🎥
[Play Flappy Bird](https://flappy-bird-b0923.web.app)

## Contributing 🤝
Contributions to the project are welcome! Whether it's optimizing performance, adding new features, or improving the game mechanics, feel free to fork the repository and submit a pull request.

## License 📄
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements 🙏
- Inspired by the original Flappy Bird game created by Dong Nguyen.
- Built with love by [Bilguun Tuvshin].
