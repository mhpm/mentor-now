import * as Facebook from 'expo-facebook'

Facebook.initializeAsync({
  appId: '1007474016423973',
})

import {
  FACEBOOK_SIGN_IN_START,
  FACEBOOK_SIGN_IN_SUCCESS,
  FACEBOOK_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from './authTypes'

export const facebookSignIn = async (dispatch) => {
  try {
    dispatch({ type: FACEBOOK_SIGN_IN_START })

    const {
      type,
      token,
      expirationDate,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile', 'email'],
    })

    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?fields=id,first_name,last_name,picture.type(normal),email&access_token=${token}`
      )
      const info = await response.json()
      console.log(
        ' >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Logged in!',
        info
      )

      const { id, first_name, last_name, email, picture } = info
      const user = {
        id: id,
        first_name: first_name,
        last_name: last_name,
        email: email,
        picture: picture.data.url,
      }

      dispatch({ type: FACEBOOK_SIGN_IN_SUCCESS, token: token, user: user })
    } else {
      // type === 'cancel'
      console.log('login cancel')
    }
  } catch ({ message }) {
    dispatch({ type: FACEBOOK_SIGN_IN_FAILURE, error: message })
  }
}

export const signIn = (form) => async (dispatch) => {
  try {
    dispatch({ type: EMAIL_SIGN_IN_START })

    const res = await fetch(
      'http://45.55.110.117/mentornow-api/api/public/users/login',
      {
        method: 'POST',
        body: form,
      }
    )
    const data = await res.json()

    if (data?.token) {
      dispatch({
        type: EMAIL_SIGN_IN_SUCCESS,
        token: data.token,
        user: data.content,
      })
      return
    }

    dispatch({ type: EMAIL_SIGN_IN_FAILURE, error: data.message })
  } catch ({ message }) {
    dispatch({ type: EMAIL_SIGN_IN_FAILURE, error: message })
  }
}

export const signUp = (form, fb_id = undefined) => async (dispatch) => {
  try {
    dispatch({ type: SIGN_UP_START })

    const res = await fetch(
      'http://45.55.110.117/mentornow-api/api/public/users/register',
      {
        method: 'POST',
        body: form,
      }
    )
    const data = await res.json()

    if (data?.token) {
      console.log('====================================')
      console.log(data.content)
      console.log('====================================')
      dispatch({ type: SIGN_UP_SUCCESS, token: data.token, user: data.content })
      return
    }

    dispatch({ type: SIGN_UP_FAILURE, error: data.message })
  } catch ({ message }) {
    dispatch({ type: SIGN_UP_FAILURE, error: message })
  }
}

export const signOut = async (dispatch) => {
  try {
    dispatch({ type: SIGN_OUT_START })

    await Facebook.logOutAsync()

    dispatch({ type: SIGN_OUT_SUCCESS })
  } catch ({ message }) {
    dispatch({ type: SIGN_OUT_FAILURE, error: message })
  }
}

export const resetPassword = (form) => async (dispatch) => {
  console.log('====================================')
  console.log(dispatch)
  console.log('====================================')
  try {
    dispatch({ type: RESET_PASSWORD_START })

    const res = await fetch(
      'http://polls.apiblueprint.org/users/password/reset',
      {
        method: 'POST',
        body: form,
      }
    )

    dispatch({ type: RESET_PASSWORD_SUCCESS })
  } catch ({ message }) {
    dispatch({ type: RESET_PASSWORD_FAILURE, error: message })
  }
}
