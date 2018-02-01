class Api::SessionsController < ApplicationController

  # def new
  # end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render '/api/users/show'
    else
      render json: ['Invalid username or password'], status: 401
    end
  end
  #
  # def edit
  # end
  #
  # def update
  # end
  #
  # def show
  # end

  # def index
  # end

  def destroy
    @user = current_user
    if @user
      logout
      render '/api/users/show'
    else
      render json: ["Please sign in"], status: 404
    end
  end

end