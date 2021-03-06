import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <main>
      <ErrorBoundary fallback={<p>Error</p>}>
        <nav>
          <ul>
            <li>
              <Link href="/home">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/page1">
                <a>PAGE1</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          {/** Headerコンポーネントなど全ページ共通のコンポーネントが入る */}
          {/* <Header /> */}
          {children}
        </div>
      </ErrorBoundary>
    </main>
  );
};

export default DefaultLayout;
