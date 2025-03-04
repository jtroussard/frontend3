export const REGEX_PATTERNS = {
  USERNAME: /^[A-z][A-z0-9-_]{3,23}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
  EMAIL: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
};

export const VALIDATION_HINTS = {
  USERNAME: `4 to 24 characters.<br />
             Must begin with a letter.<br />
             Letters, numbers, underscores, and hyphens allowed.`,

  EMAIL: `4 to 254 characters.<br />
          Must contain an &quot;@&quot; symbol and a &quot;.&quot; after it.<br />
          Letters, numbers, dots, hyphens, and underscores allowed before &quot;@&quot;.<br />
          Domain must contain letters, numbers, and hyphens.<br />
          Must end with a valid domain suffix (e.g., .com, .net, .org).`,

  PASSWORD: `8 to 24 characters.<br />
             Must include uppercase and lowercase letters, a number, and a special character.<br />
             Allowed special characters: <span aria-label="exclamation mark">!</span> 
             <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> 
             <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>`,

  CONFIRM_PASSWORD: `Must match the first password input field.`
};
