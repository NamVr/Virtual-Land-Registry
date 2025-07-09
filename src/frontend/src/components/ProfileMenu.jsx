<<<<<<< HEAD

=======
import React, { useState } from "react";

function ProfileMenu({ principal, onLogout }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const truncatePrincipal = (id) => id.slice(0, 5) + "..." + id.slice(-3);

  return (
    <div className="profile-menu">
      <div
        onClick={toggle}
        className="profile-avatar"
        title={`Principal ID: ${principal}`}
      >
        👤
      </div>

      {open && (
        <div className="profile-dropdown">
          <p>
            <strong>Principal ID:</strong>
            <br />
            <span className="principal-id">{truncatePrincipal(principal)}</span>
          </p>
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
>>>>>>> 214d2a7dce11fe48d8b3f833c63568c93b3f7173
