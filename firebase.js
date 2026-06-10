// Firebase cargado como módulo ES — expone window.FB cuando está listo
(async () => {
  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js");
    const {
      getDatabase,
      ref,
      set,
      get,
      update,
      onValue,
      off,
      push,
      serverTimestamp,
      onDisconnect,
      remove
    } = await import("https://www.gstatic.com/firebasejs/11.9.0/firebase-database.js");

    const firebaseConfig = {
      apiKey: "AIzaSyA79LwOtKvbwMdB7mWvLkkq4h0m2OQmD-E",
      authDomain: "quienesquienadri.firebaseapp.com",
      databaseURL: "https://quienesquienadri-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "quienesquienadri",
      storageBucket: "quienesquienadri.firebasestorage.app",
      messagingSenderId: "368106351178",
      appId: "1:368106351178:web:ec12705faac69ba53914b3"
    };

    const app = initializeApp(firebaseConfig);
    const db  = getDatabase(app);

    window.FB = {
      db,
      ref, set, get, update, onValue, off, push,
      serverTimestamp, onDisconnect, remove
    };

    console.log("Firebase iniciado");
  } catch (err) {
    console.error("Error iniciando Firebase:", err);
    window.FB = null;
  }
})();
