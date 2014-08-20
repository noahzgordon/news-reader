class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  def self.generate_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    user = self.find_by_username(username)

    user && user.is_password?(password) ? user : nil
  end

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_token
    self.save!
    return self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_token
  end
end
