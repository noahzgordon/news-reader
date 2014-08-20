class Api::FeedsController < ApplicationController
  before_action :require_signed_in

  def index
    render :json => current_user.feeds.all
  end

  def show
    render :json => current_user.feeds.find(params[:id]), include: :latest_entries
  end

  def create
    feed = current_user.feeds.find_or_create_by_url(feed_params[:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def update
    feed = current_user.feeds.find(params[:id])
    if feed.update(feed_params)
      render :json => feed
    else
      render :json => feed.errors, status: :unprocessable_entity
    end
  end

  def destroy
    feed = current_user.feeds.find(params[:id])

    if feed.destroy
      render :json => feed
    else
      render :json => { error: "feed not found" }, status: :unprocessable_entity
    end
  end

  private

  def feed_params
    params.require(:feed).permit(:title, :url, :favorite)
  end
end
