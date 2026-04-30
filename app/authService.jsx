import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/db";
import { auth } from "@/firebase/auth";

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    console.log("✅ Usuario registrado:");
    // 🔥 Crear el store inmediatamente después del registro
    const uid = userCredential.user.uid;

    await setDoc(doc(db, "users", uid), {
      email,
      storeId: uid,
    });
    console.log("✅ Store inicial creado para nuevo usuario:", uid);

    return { success: true };
  } catch (error) {
    console.error("❌ Error al registrar usuario:", error);
    return { success: false, error };
  }
};
