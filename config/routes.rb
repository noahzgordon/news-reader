NewReader::Application.routes.draw do
  namespace :api do
    resources :feeds, only: [:index, :create, :show, :destroy] do
      resources :entries, only: [:index]
    end
  end

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  root to: "static_pages#index"
end
