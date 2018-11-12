class BlogsController < ApplicationController
  skip_before_action :authenticate_user!,only: [:index, :show]
  before_action :set_review, only: [:show, :update, :destroy]

  #get_blogs here?
  def index
    render json: Blog.all 
  end

  def show
    render json @blog
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def set_blog
    @blog = Blog.find(params[:id])
  end

  def blog_params
    params.require(:blog).permit(:title, :author, :body)
  end


end
