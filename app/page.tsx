import { redirect } from 'next/navigation';

/**
 * Main page - redirect to web3-agent
 */
export default function HomePage() {
  redirect('/web3-agent');
}
