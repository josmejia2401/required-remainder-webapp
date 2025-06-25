# 🌐 Required Remainder WebApp (Angular 14)

Interfaz web moderna y práctica para interactuar con el microservicio de cálculo “Required Remainder” ([reto Codeforces 1374A](https://codeforces.com/problemset/problem/1374/A)).

---

➡️ [Demo online S3 AWS](https://required-remainder.s3.us-east-1.amazonaws.com/index.html)

---

## 🚀 ¿Qué hace esta app?

Permite al usuario ingresar los parámetros del reto (`x`, `y`, `n`), enviar la consulta al backend, y visualizar el resultado de manera sencilla, elegante y validada.

* **Frontend Angular 14** con formularios reactivos y UI amigable
* **Validación visual** de campos y mensajes de error
* **Indicador de carga** mientras consulta el backend
* **Conexión directa al API REST Java/Spring Boot**
* Listo para local o para consumir servicios desplegados en AWS

---

## 🛠️ Instalación y uso

### 1. Requisitos

* Node.js 16+ (recomendado)
* Angular CLI v14
* npm

### 2. Instalación de dependencias

```bash
npm install
```

### 3. Ejecutar en desarrollo

```bash
ng serve
```

La web estará disponible en: [http://localhost:4200](http://localhost:4200)

---

## 🖥️ Uso y experiencia

1. Completa los campos `x`, `y`, `n` (solo números válidos).
2. Presiona “Calcular”.
3. Si los campos son válidos, la app muestra un **spinner de carga** mientras consulta el backend.
4. El resultado aparece visualmente debajo del formulario.
5. Si ocurre un error (backend no responde o datos inválidos), se muestra mensaje visual claro.

---

### 🧑‍💻 Ejemplo de request enviado

```json
[
  {
    "x": 7,
    "y": 5,
    "n": 12345
  }
]
```

---

## 🌍 Endpoints usados

La app está configurada para consumir por defecto el backend en:

* `http://3.81.228.233:8080/api/required-remainder/batch`

---

## 🏗️ Backend y despliegue

Este frontend está pensado para interactuar con el microservicio Java/Spring Boot desarrollado por [josmejia2401](https://github.com/josmejia2401):

* **Backend:**
  [https://github.com/josmejia2401/required-remainder](https://github.com/josmejia2401/required-remainder)
* **Infraestructura como código (AWS/ECS/ECR/API Gateway):**
  [https://github.com/josmejia2401/required-remainder-infra](https://github.com/josmejia2401/required-remainder-infra)

---

## 📦 Estructura recomendada

```
src/
├── app/
│   ├── models/
│   ├── services/
│   └── components/
│       └── remainder-form/
│            ├── remainder-form.component.ts
│            ├── remainder-form.component.html
│            └── remainder-form.component.css
...
```

---

## 🎨 ¿Cómo luce el formulario?

* Responsive, con validaciones en tiempo real
* Mensajes de error debajo de cada campo
* Spinner cuando el backend está procesando

---

## 👤 Autor

* **José Mejía** – [josmejia2401@gmail.com](mailto:josmejia2401@gmail.com)

---