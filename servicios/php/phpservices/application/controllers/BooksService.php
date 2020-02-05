<?php

defined('BASEPATH') or exit('No direct script access allowed');
require_once(APPPATH . '/libraries/REST_Controller.php');

use Restserver\libraries\REST_Controller;

class BooksService extends REST_Controller
{
    public function __construct()
    {

        header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
        header("Access-Control-Allow-Origin: *");


        parent::__construct();
        $this->load->database();
    }

    public function index_get()
    {
        $respuesta = array(
            'error' => false,
            'datos' => 'Controlador del servicio para books'
        );

        $this->response($respuesta);
    }

    public function datos_get($id = null){
        if($id == null){ //SELECT * FROM `books`
            $query = $this->db->query('SELECT * FROM `books`');
            $respuesta = array(
                'respuesta' => $query->result_array()
            );
        }else{
            $query = $this->db->query("SELECT * FROM `books` where id = '" . $id . "'");
            $respuesta = array(
                'respuesta' => $query->result_array()
            ); 
        }

        $this->response($respuesta);
    }


}