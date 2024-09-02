export function playSystemBeep() {
    const context = new (window.AudioContext)();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.type = 'square'; // You can change the type to 'sine', 'square', 'sawtooth', or 'triangle'
    oscillator.frequency.setValueAtTime(440, context.currentTime); // Frequency in Hertz (440Hz is a standard A note)
    gainNode.gain.setValueAtTime(0.1, context.currentTime); // Volume

    oscillator.start();
    oscillator.stop(context.currentTime + 0.1); // Play sound for 0.1 seconds
}
