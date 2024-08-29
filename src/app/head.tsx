import React from 'react';

export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <title>OVDP</title>
      <script>
        {`
        (function() {

            // JavaScript snippet handling Dark/Light mode switching

            const getStoredTheme = () => localStorage.getItem('theme');
            const setStoredTheme = theme => localStorage.setItem('theme', theme);
            const forcedTheme = document.documentElement.getAttribute('data-bss-forced-theme');

            const getPreferredTheme = () => {

                if (forcedTheme) return forcedTheme;

                const storedTheme = getStoredTheme();
                if (storedTheme) {
                    return storedTheme;
                }

                const pageTheme = document.documentElement.getAttribute('data-bs-theme');

                if (pageTheme) {
                    return pageTheme;
                }

                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }

            const setTheme = theme => {
                if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.setAttribute('data-bs-theme', 'dark');
                } else {
                    document.documentElement.setAttribute('data-bs-theme', theme);
                }
            }

            setTheme(getPreferredTheme());

            const showActiveTheme = (theme, focus = false) => {
                const themeSwitchers = [].slice.call(document.querySelectorAll('.theme-switcher'));

                if (!themeSwitchers.length) return;

                document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
                    element.classList.remove('active');
                    element.setAttribute('aria-pressed', 'false');
                });

                for (const themeSwitcher of themeSwitchers) {

                    const btnToActivate = themeSwitcher.querySelector('[data-bs-theme-value="' + theme + '"]');

                    if (btnToActivate) {
                        btnToActivate.classList.add('active');
                        btnToActivate.setAttribute('aria-pressed', 'true');
                    }
                }
            }

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                const storedTheme = getStoredTheme();
                if (storedTheme !== 'light' && storedTheme !== 'dark') {
                    setTheme(getPreferredTheme());
                }
            });

            window.addEventListener('DOMContentLoaded', () => {
                showActiveTheme(getPreferredTheme());

                document.querySelectorAll('[data-bs-theme-value]')
                    .forEach(toggle => {
                        toggle.addEventListener('click', (e) => {
                            e.preventDefault();
                            const theme = toggle.getAttribute('data-bs-theme-value');
                            setStoredTheme(theme);
                            setTheme(theme);
                            showActiveTheme(theme);
                        })
                    })
            });
        })();
        `}
      </script>
      <link rel="stylesheet" href="../public/assets/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Alatsi&amp;display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Anton&amp;display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Aoboshi+One&amp;display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Archivo+Black&amp;display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Doppio+One&amp;display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway&amp;display=swap" />
      <link rel="stylesheet" href="../public/assets/css/bs-theme-overrides.css" />
      <link rel="stylesheet" href="../public/assets/css/Features-Image-images.css" />
      <link rel="stylesheet" href="../public/assets/css/Navbar-Centered-Brand-Dark-icons.css" />
      <link rel="stylesheet" href="../public/assets/css/simple-footer.css" />
      </>
  );
}
