import React, { useState } from 'react';
import BACKEND_URL from './Config';

const UserProfile = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BACKEND_URL}/auth/update-profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          new_username: newUsername,
          new_password: newPassword,
        }),
      });

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/auth/delete-account`, {
        method: 'DELETE',
        headers: {
        },
      });

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <div className="form-group">
          <label htmlFor="updateUsername">New Username:</label>
          <input
            type="text"
            className="form-control"
            id="updateUsername"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="updatePassword">New Password:</label>
          <input
            type="password"
            className="form-control"
            id="updatePassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>

      <div className="mt-3">
        <button onClick={handleDeleteAccount} className="btn btn-danger">Delete Account</button>
      </div>
    </div>
  );
};

export default UserProfile;

