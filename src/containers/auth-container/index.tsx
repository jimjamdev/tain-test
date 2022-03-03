import Button from '@mui/material/Button';
import { signIn, signOut, useSession } from 'next-auth/client';

export const AuthContainer = () => {
  const [session] = useSession();

  function renderLogoutButton() {
    if (session) {
      return (
        <Button color="secondary" variant="contained" onClick={() => signOut()}>
          sign out
        </Button>
      );
    }
  }

  function renderAuthButtons() {
    return (
      <>
        <Button
          color="primary"
          variant="contained"
          onClick={() =>
            signIn('google', { callbackUrl: process.env.NEXT_PUBLIC_DOMAIN })
          }
        >
          Google
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() =>
            signIn('github', { callbackUrl: process.env.NEXT_PUBLIC_DOMAIN })
          }
        >
          GitHub
        </Button>
      </>
    );
  }

  return (
    <>
      {!session && renderAuthButtons()}
      {session && renderLogoutButton()}
    </>
  );
};
