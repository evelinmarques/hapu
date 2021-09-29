import { ReactElement } from 'react';
import imageSection1 from '../../assets/images/imageSection1@2.svg';

interface IDescription {
  title: ReactElement;
  link: ReactElement;
  description: ReactElement;
  image: string;
}

export const DESCRIPTION: IDescription = {
  title: (
    <>
      Share your home,
      <br /> nanny and costs
    </>
  ),
  description: (
    <>
      You have a fantastic home, a fantastic nanny and wouldn’t cutting your
      costs in half be, well, fantastic?! If only it was easy to connect with
      other parents to share your costs? Well now it is, with Hapu.{' '}
      <a href="/">Hapu means tribe</a> and it’s our foundational 3 tribal
      principles that empowers you to create and manage your own tribe. A tribe
      that together has the power to create new affordable solutions in
      childcare that work for you and your community.
    </>
  ),
  image: imageSection1,
  link: <>Ready to get started?</>,
};
