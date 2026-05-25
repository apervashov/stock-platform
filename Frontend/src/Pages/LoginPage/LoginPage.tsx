import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/useAuth';
import { useForm } from 'react-hook-form';

type Props = {};

type LoginFormsInputs = {
  userName: string;
  password: string;
};

const validation = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = (_props: Props) => {
  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormsInputs>({ resolver: yupResolver(validation) });

  const handleLogin = (form: LoginFormsInputs) => {
    loginUser(form.userName, form.password);
  };
  return (
    <section className="bg-surfaceCanvas">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:min-h-[calc(100vh-5rem)] lg:py-12">
        <div className="w-full rounded-card border border-line bg-surface shadow-card sm:max-w-md">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-contentPrimary md:text-2xl">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-contentPrimary"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="input-field"
                  placeholder="Username"
                  {...register("userName")}
                />
                {errors.userName ? (
                  <p className="mt-1 text-sm text-feedbackError">{errors.userName.message}</p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-contentPrimary"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="input-field"
                  {...register("password")}
                />
                {errors.password ? (
                  <p className="mt-1 text-sm text-feedbackError">{errors.password.message}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-brandLink hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-contentSecondary">
                Don’t have an account yet?{' '}
                <Link to="/register" className="font-medium text-brandLink hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;