<?php
namespace AFE\DmoBundle\Controller;
use LIM\MoreSalle\Service\Login;
use Emeric0101\PHPAngular\Controller\Entity;
use Emeric0101\PHPAngular\Service\{DbService, Url, Request, Response};

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




    public function forgot() {
        $mail = $this->request->post('mail', '');
        $user = $this->entityManager->getRepository("AFE\DmoBundle\Entity\User")->findByMail($mail);
        if (empty($user) || !$this->login->forgot($user[0])) {
            $this->response->setError('BAD_MAIL');
            return false;
        }
        return true;
    }



}
