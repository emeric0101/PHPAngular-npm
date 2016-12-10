<?php
namespace LIM\MoreSalle\Controller;
use Emeric0101\PHPAngular\Service\Login;
use Emeric0101\PHPAngular\Controller\Entity;
use Emeric0101\PHPAngular\Service\{DbService, Url, Request, Response};
use LIM\MoreSalle\Entity\User as UserEntity;
class User extends Entity {
    private $login = null;
    private $url = null;
    public function __construct(Request $request, Response $response, Login $login, Url $url, DbService $dbservice) {
        $this->request = $request;
        $this->response = $response;
        $this->login = $login;
        $this->url = $url;
        $this->entityManager = $dbservice->getEntityManager();
    }


    public function post($id = 0) {

    }

    public function forgot() {
        $mail = $this->request->post('mail', '');
        $user = $this->entityManager->getRepository("LIM\MoreSalle\Entity\User")->findByMail($mail);
        if (empty($user) || !$this->login->forgot($user[0])) {
            $this->response->setError('BAD_MAIL');
            return false;
        }
        return true;
    }



}
