# 🛤️ FAYA-TRACK

> _"Track Your Journey. Prove Your Progress."_  
> A digital platform that verifies informal learning, volunteer work, and self-taught experience — powered by Fayda ID.

---

## Contributors
- Tsedeniya Abebe 
- Girumsew Burka
- Natinael Alemayew

## 📘 Overview

**FAYA-TRACK** is a digital achievement verification platform built for Ethiopians who grow their skills through **non-traditional paths** like freelancing, online courses, volunteering, apprenticeships, and personal projects. Too often, these valuable experiences are **invisible** on formal applications or CVs.

FAYA-TRACK lets users **log, prove, and share** their journey — with **Fayda-powered identity verification** for credibility and trust.

---

## 🔍 Problem Statement

Many young Ethiopians develop skills and experience **outside of formal institutions**, but lack a way to:

- 📄 Record and organize their progress  
- ✅ Get their efforts verified by mentors or partners  
- 💼 Present informal experience in job or scholarship applications  
- 🔐 Secure their data under a trusted national ID  

As a result, much of their potential is overlooked — by employers, universities, and funders.

---

## 💡 Our Solution

FAYA-TRACK offers a secure and simple way to:

- 🪪 Log in using **Fayda ID**  
- 🛠️ Track learning journeys, freelance work, volunteer activity, and projects  
- 🧾 Upload evidence (files, links, screenshots, testimonials)  
- 🙌 Get verified by mentors, employers, clients, or NGOs  
- 📝 Auto-generate a **smart CV** or **achievement portfolio**  
- 🔎 Use AI tools to find skill gaps and recommended next steps  
- 🔗 Share profiles via **QR code** or **custom link**

---

## 🎯 Target Users

- Grade 12 graduates not in college
- Self-taught individuals and online learners
- Freelancers, volunteers, or informal workers
- Bootcamp or Telegram learners
- Rural youth building community skills

---

## 🔐 Role of Fayda

Fayda ensures that every FAYA-TRACK profile is:

- Biometrically verified  
- Unique and tamper-proof  
- Legally and socially trusted  
- Ready for future fintech or gov-tech use cases  

We integrate with Fayda using **OIDC (OpenID Connect)** to enable secure, compliant authentication.

---

## 🛠️ Tech Stack

| Layer            | Technology                                  |
|------------------|----------------------------------------------|
| Frontend         | React / Next.js / Tailwind CSS               |
| Backend          | Node.js / Express                            |
| Database         | MongoDB Atlas                                |
| Auth             | Fayda OIDC (mocked for now)                  |
| File Upload      | Firebase / AWS S3                            |
| AI Engine        | OpenAI / Local ML (skill gap recommender)    |
| Deployment       | Vercel (frontend) + Render / Railway (API)   |
| Others           | QR Generator, PDF Generator, Markdown Viewer |

---

## 📂 Project Structure (Example)

