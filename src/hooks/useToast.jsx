import React, { useEffect } from "react"
import styled from "styled-components"
import { toast } from "react-toastify"
import TOAST_IMGURL from "images/act2/toast.webp"

const ToastImg = styled.img`
  width: 20px;
  height: 20px;
`

const useToast = (text) => {
  useEffect(() => {
    toast(text, {
      icon: () => <ToastImg src={TOAST_IMGURL} alt="뭉게 얼굴" />,
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }, [text])
}

export default useToast
