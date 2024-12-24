import { AUTH_KAKAO_ID, AUTH_KAKAO_SECRET } from "$env/static/private";
import { PUBLIC_ORIGIN } from "$env/static/public";

const baseAuthorizationUrl = "https://kauth.kakao.com/oauth/authorize"
    + "?response_type=code"
    + "&prompt=select_accoun"
    + "&client_id=" + AUTH_KAKAO_ID
    + "&redirect_uri=" + PUBLIC_ORIGIN + "/auth/callback/kakao";

const createTokenUrl = (code) => {
    const url = "https://kauth.kakao.com/oauth/token";
    const option = {
        method: "POST",
        headers: {
            "Content-type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "authorization_code",
            client_id: AUTH_KAKAO_ID,
            client_secret: AUTH_KAKAO_SECRET,
            redirect_uri: `${PUBLIC_ORIGIN}/auth/callback/kakao`,
            code,
        }),
    };

    return { url, option }
}

const createUserUrl = (access_token) => {
    const url = "https://kapi.kakao.com/v2/user/me";
    const option = {
        headers: {
            "Content-type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${access_token}`,
        },
    };

    return { url, option }
}

const getNickname = (user) => {
    return user.properties.nickname
}

export default { baseAuthorizationUrl, createTokenUrl, createUserUrl, getNickname }