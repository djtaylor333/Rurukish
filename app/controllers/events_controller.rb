class EventsController < ApplicationController
  def index
    @events = Event.order(date: :asc).page params[:page]

    render :index
  end

  def new
    render :new
  end

  def create
    redirect_to action: :index
  end
end