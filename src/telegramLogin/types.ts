/**
 * The data received from Telegram when the user is authenticated.
 *
 * @see https://core.telegram.org/widgets/login#receiving-authorization-data
 */
export interface TelegramAuthData {
  id: number;
  first_name: string;
  auth_date: number;
  hash: string;
  last_name?: string;
  photo_url?: string;
  username?: string;
}

export interface LoginButtonProps {
  botUsername: string;
  buttonSize?: 'large' | 'medium' | 'small';
  cornerRadius?: number;
  lang?: string;
  onAuthCallback?: (data: TelegramAuthData) => void;
  requestAccess?: 'write' | null;
  showAvatar?: boolean;
  widgetVersion?: number | string;
}
export type CreateScriptOptions = LoginButtonProps;

export type TTelegramAuthLogin = Pick<LoginButtonProps, 'onAuthCallback'>;

declare global {
  interface Window {
    TelegramAuthLogin: TTelegramAuthLogin;
  }
}
