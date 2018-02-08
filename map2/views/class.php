<?php
	class App
	{	
		function __construct()
		{
			require 'app.php';
		}
	}

	class Admin
	{
		
		function createLogin(){
			require 'asset/login.php';
		}

		function index( $isLogin = 1 )
		{	
			if ($isLogin <> 0) {
				require 'asset/dashboard.php';
			}
			else{
				$this->createLogin();
			}
		}

		function __construct()
		{
			session_start();
			require 'load.php';

			$this->index();

			require 'asset/footer.html';
		}
	}
?>