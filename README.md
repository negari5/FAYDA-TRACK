# 🩺 FAYDA-TRACK

> _"Your Health. Your Records. Verified."_  
> A trusted digital health tracking platform powered by Fayda ID — for everyday health journeys, informal care, and verified wellbeing documentation.

---

## 🤝 Contributors

- **Tsedeniya Abebe**  
- **Girumsew Burka**  
- **Natinael Alemayew**

---

## 📘 Overview

**FAYDA-HEALTHTRACK** is a digital platform that enables Ethiopian citizens to **log, track, and verify** their personal and informal health history — including everyday health events, community-based care, fitness routines, chronic illness monitoring, and verified vaccination or test records — all secured through **Fayda biometric ID**.

It helps users take ownership of their health journey while giving care providers, NGOs, or institutions **real-time, secure access to verified records**, when permitted.

---

## 🔍 Problem Statement

In Ethiopia, most people do not have access to consistent medical records or formal documentation of their health journey, due to:

- 📝 Informal care or community-based treatment
- 📁 Paper-based records that are easy to lose
- ❌ No unified system to prove fitness, vaccination, or chronic illness history
- ⛔ No trusted way to verify informal health-related activities (e.g., personal wellness logs, maternal checkups, fitness plans)

This creates gaps in care, delays in services, and limits access to insurance, jobs, or scholarships that require verified health history.

---

## 💡 Our Solution

**FAYDA-HEALTHTRACK** offers a **simple and secure** way to:

- 🪪 Log in with **Fayda Digital ID**
- 🩺 Record informal health activities and care episodes
- 💊 Track chronic conditions, medication, and checkups
- 🧾 Upload health-related evidence (clinic cards, reports, photos)
- ✅ Allow NGOs, community workers, or clinics to verify care
- 📤 Generate **verified health summaries** (for school, jobs, travel, etc.)
- 🔗 Share via secure **QR codes** or **permission-based links**
- 📊 Use AI to spot patterns, suggest prevention tips, or highlight missing records

---

## 🎯 Target Users

- Rural and urban citizens receiving informal care  
- Maternal and child health participants  
- People with chronic illnesses (e.g., diabetes, epilepsy)  
- Fitness-conscious individuals tracking health goals  
- Community health agents and NGO-supported households  
- Youth applying for scholarships or travel requiring health clearance

---

## 🔐 Role of Fayda

Fayda powers the **identity and trust layer**:

- Verifies every user through biometric Fayda ID  
- Secures health records to a unique individual  
- Ensures records are tamper-proof, traceable, and confidential  
- Enables consent-based access to clinics, NGOs, and employers

Fayda integration is built using **OIDC (OpenID Connect)**.

---

## 🛠️ Tech Stack

| Layer            | Technology                                   |
|------------------|-----------------------------------------------|
| Frontend         | React / Next.js / Tailwind CSS                |
| Backend          | Node.js / Express                             |
| Database         | MongoDB Atlas                                 |
| Auth             | Fayda OIDC (mocked for now)                   |
| File Upload      | Firebase / AWS S3                             |
| AI Engine        | GPT / Local ML (risk detection, prevention tips) |
| Deployment       | Vercel (frontend) + Render / Railway (backend)|
| Extras           | QR Code Generator, PDF Summary Generator      |

---

## 📂 Project Structure (Example)

