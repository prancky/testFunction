import MainRoutes from './MainRoutes';

import Login from './Login';

import SignUp from './SignUp';

import CreateQuote from './CreateQuote';

import CreateRecepient from './CreateRecepient';

import UpdateQuote from './UpdateQuote';

import CreateTransfer from './CreateTransfer';

import FundTransfer from './FundTransfer';

import FinishRoutes from './FinishRoutes';

import WelcomeRoutes from './WelcomeRoutes';

export default {
  ...MainRoutes,

  ...Login,

  ...SignUp,

  ...CreateQuote,

  ...CreateRecepient,

  ...UpdateQuote,

  ...CreateTransfer,

  ...FundTransfer,

  ...FinishRoutes,

  ...WelcomeRoutes,
};
