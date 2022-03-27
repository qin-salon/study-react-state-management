# React State Management （状態管理）

## ローカルとグローバルの状態管理について知る

なぜ useState だけじゃ駄目なのか

![React Component Tree](https://cleanshot-cloud-fra.s3.eu-central-1.amazonaws.com/media/17639/dff844jwfLJXyY1meKJeNdE3MNVjPA0k9CzDFcYT.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaDGV1LWNlbnRyYWwtMSJHMEUCIE9jM8YsZWhN2Q1PZpddx9aAS1tYYWdzejPRfooUQm5YAiEA5t9eN24pcb8RwUeoectBABIvLndF7IfKyj343q7wozsqqgIInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw5MTk1MTQ0OTE2NzQiDI6lA5o4fJN5%2B8b1MCr%2BAaK4UkuadSxRbZRSwcY2ijG9KYv3YwkWEvBloY7b6TLJqPuBKREC7Xq8XllgT7G4EqxkebuUWjWOFjprDJWfaRNLh%2Ft9QvGUWE0tzBocsm39jrvJFTijUwZprW5Z0xt7QdP1%2BpRJiqE%2BWQLv7oqp2SntTpJlCHDVkLdNkaMH0oOiqzMnmUmtZeNdReUSo1ZPykFuy2Yuq48fWKIajH1j%2FzkTZZmM2KYvsOlO8dl4bTn4DovTCLxxkTXyhQowGIlEP1bCfTuUssmuiPeskOXrrRCAGfd1PBOoky3mAkkqDUrk4dyFA8zNXWiyIYAsgpHmjEZZY0I99U9sHYBvuoE4MOHY%2F5EGOpoBwG6hb9JEtHG94KxreDIYSdncJXlTzZUv23PU25UoaSu2g6SywhdzqXBVYuitns9o9vHmlcMW5uwvN5nyrPxuXwglojbAYPB%2BuSNLptfAJ12o9GEg0p0FuwLDzE4vBgyL3v7TZY6huzGlAZAYMpeNQhqMwI83Oklwty5u1tBHnCjlo7PZNVe4VFaSamjQxaEyvbLgeQyWeWVn6Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5MF2VVMNJ2TYHHB3%2F20220327%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220327T052454Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=c54f13034e0f3324f5f476abe6e9697bfbca027b19956becac816671bbce0b28)

## どのライブラリが人気があるか

[2021 JavaScript Rising Stars](https://risingstars.js.org/2021/en#section-statemanagement) で勢いを知る

![2021 JavaScript Rising Stars State Management](https://cleanshot-cloud-fra.s3.eu-central-1.amazonaws.com/media/17639/gceNnpCR7grrLDvqkduF0BFdwTuRxVlwaJYl8UuN.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaDGV1LWNlbnRyYWwtMSJHMEUCIE9jM8YsZWhN2Q1PZpddx9aAS1tYYWdzejPRfooUQm5YAiEA5t9eN24pcb8RwUeoectBABIvLndF7IfKyj343q7wozsqqgIInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw5MTk1MTQ0OTE2NzQiDI6lA5o4fJN5%2B8b1MCr%2BAaK4UkuadSxRbZRSwcY2ijG9KYv3YwkWEvBloY7b6TLJqPuBKREC7Xq8XllgT7G4EqxkebuUWjWOFjprDJWfaRNLh%2Ft9QvGUWE0tzBocsm39jrvJFTijUwZprW5Z0xt7QdP1%2BpRJiqE%2BWQLv7oqp2SntTpJlCHDVkLdNkaMH0oOiqzMnmUmtZeNdReUSo1ZPykFuy2Yuq48fWKIajH1j%2FzkTZZmM2KYvsOlO8dl4bTn4DovTCLxxkTXyhQowGIlEP1bCfTuUssmuiPeskOXrrRCAGfd1PBOoky3mAkkqDUrk4dyFA8zNXWiyIYAsgpHmjEZZY0I99U9sHYBvuoE4MOHY%2F5EGOpoBwG6hb9JEtHG94KxreDIYSdncJXlTzZUv23PU25UoaSu2g6SywhdzqXBVYuitns9o9vHmlcMW5uwvN5nyrPxuXwglojbAYPB%2BuSNLptfAJ12o9GEg0p0FuwLDzE4vBgyL3v7TZY6huzGlAZAYMpeNQhqMwI83Oklwty5u1tBHnCjlo7PZNVe4VFaSamjQxaEyvbLgeQyWeWVn6Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5MF2VVMNJ2TYHHB3%2F20220327%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220327T052754Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=f2749bfa8f0209272467c90fb4c6a83cb29bcccff8c840d18f375e3cdf510441)

## ライブラリごとの立ち位置を知る

![State Metric](https://cleanshot-cloud-fra.s3.eu-central-1.amazonaws.com/media/17639/xP6gCRG0Vh10pUi4jJaS5DqauEh4KobNIh13OPfI.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaDGV1LWNlbnRyYWwtMSJHMEUCIFCLfoAVguuFJaQoEAJHhhC9XyAH80fGk17aMZX7BlnRAiEAu5WBXKZW0Hy4vKRScf2bi6UwmVsLOw9lBSqyhLB7bfwqqgIInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw5MTk1MTQ0OTE2NzQiDAElvo6lMgDawBsStSr%2BASy05kZbLaeq0D6%2FQ7ENqAFPojEheG6HOFWKgzzduPijp3yDQczEcVl1nn1yel6wN%2F0jdnaEMdYQKiFR9C5PIzium3V7qrCHCTRbY3vo8OlGp9kvt1KrMKKBYxl7vSIbJqxO88vyoAaa85XPvcIi%2FDzhKpcOwgd%2FalXWrGNqP2wjCbWe080xlPyJIAd8jQ8lWQ2m%2BRTdGtTlMysYWF3Mjyik77AsH6qgTnRCrJWTpPWPGNjh7RToCOCcahP0hllTzYchLoYnwZJHFhVuMdydmOvhfmzNynn%2FtfO3IpNh44WHTL%2Bxh9pyrqcSa8PPL4mWLd7iSuP0dyZmY6VcNBOGMKzE%2F5EGOpoBo2VQu%2BrLq1IiIXtNRizhfuGgf0QsODqGHICfHyUAZyKrzrEXf%2B1Jp1%2BNyDfJYSeA%2FxpWYkYJnoaSg0ei1p4yrcgiqu8v6EqFlMiXQWKGxTTJWWG%2FHCiP1xUz3bjdDrY0aAdAAXognJ596%2F%2Fi5QH%2F5niTzYz4vIrkAU35b9SI4Q%2FnUbvdX1mtEDBR4G9rL%2FBeqf4dJQjsdwmOTA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5MF2VVMNCPXNLNFU%2F20220327%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220327T052659Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=0d408bce0645065c4f59f1d4a284e144456523dd45188ef8caa6947cceebf6fa)

# 本講座で取り扱う予定の状態管理手法（2022/03/27 時点）

1. [React Context](https://beta.reactjs.org/apis/createcontext)
1. [Redux](https://redux.js.org/)
1. [Zustand](https://zustand-demo.pmnd.rs/)
1. [XState](https://xstate.js.org/)
1. [Recoil](https://recoiljs.org/)
1. [Jotai](https://jotai.org/)
1. [Valtio](https://valtio-demo.pmnd.rs/)
1. [React Query](https://react-query.tanstack.com/) や [SWR](https://swr.vercel.app/ja) のキャッシュ
