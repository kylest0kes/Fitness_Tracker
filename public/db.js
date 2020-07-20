let db;

// create a new db request for a "FitnessTracker" database.
const request = window.indexedDB.open("workout", 1);

request.onupgradeneeded = function({ target }) {
    // create object store called "pending" and set autoIncrement to true
    db = target.result;
    db.createObjectStore("Workouts", { autoIncrement: true });
};